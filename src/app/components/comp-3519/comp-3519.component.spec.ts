/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3519Component } from './comp-3519.component';

describe('Comp3519Component', () => {
  let component: Comp3519Component;
  let fixture: ComponentFixture<Comp3519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
