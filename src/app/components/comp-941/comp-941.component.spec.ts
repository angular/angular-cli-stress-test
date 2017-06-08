/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp941Component } from './comp-941.component';

describe('Comp941Component', () => {
  let component: Comp941Component;
  let fixture: ComponentFixture<Comp941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
