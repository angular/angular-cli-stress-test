/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4154Component } from './comp-4154.component';

describe('Comp4154Component', () => {
  let component: Comp4154Component;
  let fixture: ComponentFixture<Comp4154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
