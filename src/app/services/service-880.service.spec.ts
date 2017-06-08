/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service880Service } from './service-880.service';

describe('Service880Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service880Service]
    });
  });

  it('should ...', inject([Service880Service], (service: Service880Service) => {
    expect(service).toBeTruthy();
  }));
});
