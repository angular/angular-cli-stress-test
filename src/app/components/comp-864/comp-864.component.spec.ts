/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp864Component } from './comp-864.component';

describe('Comp864Component', () => {
  let component: Comp864Component;
  let fixture: ComponentFixture<Comp864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
