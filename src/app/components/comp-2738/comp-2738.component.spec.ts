/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2738Component } from './comp-2738.component';

describe('Comp2738Component', () => {
  let component: Comp2738Component;
  let fixture: ComponentFixture<Comp2738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
