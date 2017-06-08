/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1404Component } from './comp-1404.component';

describe('Comp1404Component', () => {
  let component: Comp1404Component;
  let fixture: ComponentFixture<Comp1404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
