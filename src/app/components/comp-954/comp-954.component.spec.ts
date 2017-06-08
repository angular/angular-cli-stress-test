/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp954Component } from './comp-954.component';

describe('Comp954Component', () => {
  let component: Comp954Component;
  let fixture: ComponentFixture<Comp954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
