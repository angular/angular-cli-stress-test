/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4608Component } from './comp-4608.component';

describe('Comp4608Component', () => {
  let component: Comp4608Component;
  let fixture: ComponentFixture<Comp4608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
