/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2737Component } from './comp-2737.component';

describe('Comp2737Component', () => {
  let component: Comp2737Component;
  let fixture: ComponentFixture<Comp2737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
