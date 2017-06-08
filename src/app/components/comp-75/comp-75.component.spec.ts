/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp75Component } from './comp-75.component';

describe('Comp75Component', () => {
  let component: Comp75Component;
  let fixture: ComponentFixture<Comp75Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp75Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
