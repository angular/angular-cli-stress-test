/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4236Component } from './comp-4236.component';

describe('Comp4236Component', () => {
  let component: Comp4236Component;
  let fixture: ComponentFixture<Comp4236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
