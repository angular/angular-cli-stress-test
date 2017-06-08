/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2257Component } from './comp-2257.component';

describe('Comp2257Component', () => {
  let component: Comp2257Component;
  let fixture: ComponentFixture<Comp2257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
