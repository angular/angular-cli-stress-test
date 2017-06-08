/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp661Component } from './comp-661.component';

describe('Comp661Component', () => {
  let component: Comp661Component;
  let fixture: ComponentFixture<Comp661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
