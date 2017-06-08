/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1261Component } from './comp-1261.component';

describe('Comp1261Component', () => {
  let component: Comp1261Component;
  let fixture: ComponentFixture<Comp1261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
