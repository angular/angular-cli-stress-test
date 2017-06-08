/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4259Component } from './comp-4259.component';

describe('Comp4259Component', () => {
  let component: Comp4259Component;
  let fixture: ComponentFixture<Comp4259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
