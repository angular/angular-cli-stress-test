/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2910Component } from './comp-2910.component';

describe('Comp2910Component', () => {
  let component: Comp2910Component;
  let fixture: ComponentFixture<Comp2910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
