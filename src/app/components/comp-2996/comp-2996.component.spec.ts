/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2996Component } from './comp-2996.component';

describe('Comp2996Component', () => {
  let component: Comp2996Component;
  let fixture: ComponentFixture<Comp2996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
