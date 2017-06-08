/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp527Component } from './comp-527.component';

describe('Comp527Component', () => {
  let component: Comp527Component;
  let fixture: ComponentFixture<Comp527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
