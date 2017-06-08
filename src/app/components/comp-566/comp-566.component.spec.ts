/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp566Component } from './comp-566.component';

describe('Comp566Component', () => {
  let component: Comp566Component;
  let fixture: ComponentFixture<Comp566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
