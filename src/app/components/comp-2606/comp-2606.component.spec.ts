/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2606Component } from './comp-2606.component';

describe('Comp2606Component', () => {
  let component: Comp2606Component;
  let fixture: ComponentFixture<Comp2606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
