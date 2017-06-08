/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3118Component } from './comp-3118.component';

describe('Comp3118Component', () => {
  let component: Comp3118Component;
  let fixture: ComponentFixture<Comp3118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
