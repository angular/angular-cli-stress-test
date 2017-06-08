/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service563Service } from './service-563.service';

describe('Service563Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service563Service]
    });
  });

  it('should ...', inject([Service563Service], (service: Service563Service) => {
    expect(service).toBeTruthy();
  }));
});
