/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1244Component } from './comp-1244.component';

describe('Comp1244Component', () => {
  let component: Comp1244Component;
  let fixture: ComponentFixture<Comp1244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
