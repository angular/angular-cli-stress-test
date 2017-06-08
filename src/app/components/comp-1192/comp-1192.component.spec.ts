/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1192Component } from './comp-1192.component';

describe('Comp1192Component', () => {
  let component: Comp1192Component;
  let fixture: ComponentFixture<Comp1192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
