/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1629Component } from './comp-1629.component';

describe('Comp1629Component', () => {
  let component: Comp1629Component;
  let fixture: ComponentFixture<Comp1629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
