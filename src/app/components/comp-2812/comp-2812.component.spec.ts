/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2812Component } from './comp-2812.component';

describe('Comp2812Component', () => {
  let component: Comp2812Component;
  let fixture: ComponentFixture<Comp2812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
