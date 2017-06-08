/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp859Component } from './comp-859.component';

describe('Comp859Component', () => {
  let component: Comp859Component;
  let fixture: ComponentFixture<Comp859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
