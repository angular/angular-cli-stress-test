/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2076Component } from './comp-2076.component';

describe('Comp2076Component', () => {
  let component: Comp2076Component;
  let fixture: ComponentFixture<Comp2076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
