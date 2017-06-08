/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2245Component } from './comp-2245.component';

describe('Comp2245Component', () => {
  let component: Comp2245Component;
  let fixture: ComponentFixture<Comp2245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
