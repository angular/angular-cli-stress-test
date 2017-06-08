/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2272Component } from './comp-2272.component';

describe('Comp2272Component', () => {
  let component: Comp2272Component;
  let fixture: ComponentFixture<Comp2272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
