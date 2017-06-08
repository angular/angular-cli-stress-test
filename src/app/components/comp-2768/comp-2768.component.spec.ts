/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2768Component } from './comp-2768.component';

describe('Comp2768Component', () => {
  let component: Comp2768Component;
  let fixture: ComponentFixture<Comp2768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
