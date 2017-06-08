/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2372Component } from './comp-2372.component';

describe('Comp2372Component', () => {
  let component: Comp2372Component;
  let fixture: ComponentFixture<Comp2372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
