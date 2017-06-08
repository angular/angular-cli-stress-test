/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp802Component } from './comp-802.component';

describe('Comp802Component', () => {
  let component: Comp802Component;
  let fixture: ComponentFixture<Comp802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
