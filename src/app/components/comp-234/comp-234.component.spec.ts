/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp234Component } from './comp-234.component';

describe('Comp234Component', () => {
  let component: Comp234Component;
  let fixture: ComponentFixture<Comp234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
