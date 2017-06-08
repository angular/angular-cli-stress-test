/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service761Service } from './service-761.service';

describe('Service761Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service761Service]
    });
  });

  it('should ...', inject([Service761Service], (service: Service761Service) => {
    expect(service).toBeTruthy();
  }));
});
