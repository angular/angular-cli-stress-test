/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp142Component } from './comp-142.component';

describe('Comp142Component', () => {
  let component: Comp142Component;
  let fixture: ComponentFixture<Comp142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
