/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1593Component } from './comp-1593.component';

describe('Comp1593Component', () => {
  let component: Comp1593Component;
  let fixture: ComponentFixture<Comp1593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
