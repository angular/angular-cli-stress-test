/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4050Component } from './comp-4050.component';

describe('Comp4050Component', () => {
  let component: Comp4050Component;
  let fixture: ComponentFixture<Comp4050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
