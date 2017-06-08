/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp255Component } from './comp-255.component';

describe('Comp255Component', () => {
  let component: Comp255Component;
  let fixture: ComponentFixture<Comp255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
