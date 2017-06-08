/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2620Component } from './comp-2620.component';

describe('Comp2620Component', () => {
  let component: Comp2620Component;
  let fixture: ComponentFixture<Comp2620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
