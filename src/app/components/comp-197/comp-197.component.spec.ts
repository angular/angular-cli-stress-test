/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp197Component } from './comp-197.component';

describe('Comp197Component', () => {
  let component: Comp197Component;
  let fixture: ComponentFixture<Comp197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
