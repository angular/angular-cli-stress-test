/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp854Component } from './comp-854.component';

describe('Comp854Component', () => {
  let component: Comp854Component;
  let fixture: ComponentFixture<Comp854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
