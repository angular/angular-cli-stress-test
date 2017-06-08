/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1141Component } from './comp-1141.component';

describe('Comp1141Component', () => {
  let component: Comp1141Component;
  let fixture: ComponentFixture<Comp1141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
