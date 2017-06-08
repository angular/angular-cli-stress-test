/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1271Component } from './comp-1271.component';

describe('Comp1271Component', () => {
  let component: Comp1271Component;
  let fixture: ComponentFixture<Comp1271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
