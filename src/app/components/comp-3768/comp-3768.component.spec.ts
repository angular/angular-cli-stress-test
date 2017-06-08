/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3768Component } from './comp-3768.component';

describe('Comp3768Component', () => {
  let component: Comp3768Component;
  let fixture: ComponentFixture<Comp3768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
