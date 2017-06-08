/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2942Component } from './comp-2942.component';

describe('Comp2942Component', () => {
  let component: Comp2942Component;
  let fixture: ComponentFixture<Comp2942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
