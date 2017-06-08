/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1162Component } from './comp-1162.component';

describe('Comp1162Component', () => {
  let component: Comp1162Component;
  let fixture: ComponentFixture<Comp1162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
