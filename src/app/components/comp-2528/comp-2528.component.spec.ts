/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2528Component } from './comp-2528.component';

describe('Comp2528Component', () => {
  let component: Comp2528Component;
  let fixture: ComponentFixture<Comp2528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
