/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp7Component } from './comp-7.component';

describe('Comp7Component', () => {
  let component: Comp7Component;
  let fixture: ComponentFixture<Comp7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
