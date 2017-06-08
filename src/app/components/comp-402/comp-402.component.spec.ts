/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp402Component } from './comp-402.component';

describe('Comp402Component', () => {
  let component: Comp402Component;
  let fixture: ComponentFixture<Comp402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
