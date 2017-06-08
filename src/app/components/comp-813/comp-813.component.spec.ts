/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp813Component } from './comp-813.component';

describe('Comp813Component', () => {
  let component: Comp813Component;
  let fixture: ComponentFixture<Comp813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
