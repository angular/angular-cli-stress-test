/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1178Component } from './comp-1178.component';

describe('Comp1178Component', () => {
  let component: Comp1178Component;
  let fixture: ComponentFixture<Comp1178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
