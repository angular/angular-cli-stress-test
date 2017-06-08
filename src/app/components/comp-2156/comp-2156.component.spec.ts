/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2156Component } from './comp-2156.component';

describe('Comp2156Component', () => {
  let component: Comp2156Component;
  let fixture: ComponentFixture<Comp2156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
